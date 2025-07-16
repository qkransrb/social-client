"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SignInInputs } from "@/libs/types/auth.type";
import authApi from "@/libs/apis/auth.api";
import { useAppDispatch } from "@/libs/redux/hook";
import { setUser } from "@/libs/redux/user/userSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    try {
      const res = await authApi.signIn(data);

      // Store user credentials to redux and local storage
      dispatch(
        setUser({
          user: res.data.data,
          accessToken: res.data.accessToken,
        })
      );

      toast.success("Login successfully!");
      router.push("/");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data.message
            ? error.response?.data.message
            : error.message
        );
      } else {
        toast.error("Something went wrong...");
      }
    }
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                fullWidth
                id="email"
                placeholder="your@email.com"
                autoComplete="email"
                variant="outlined"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                fullWidth
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </FormControl>
            <Button type="submit" fullWidth variant="contained">
              Sign in
            </Button>
          </Box>
          <Divider>
            <Typography sx={{ color: "text.secondary" }}>or</Typography>
          </Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography sx={{ textAlign: "center" }}>
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                variant="body2"
                sx={{ alignSelf: "center" }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </>
  );
}
