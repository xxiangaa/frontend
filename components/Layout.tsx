import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
} from "@mui/material";
import React from "react";
import Link from "next/link";
import { Menu } from "../src/Menus";
import SearchField from "./shared/SearchTextField";
import Image from "next/image";
import { Action } from "../src/Action";
import { UserAvatar } from "./Auth/UserAvatar";
import { useTranslation } from "react-i18next";

interface Props {
  children: React.ReactNode;

  actions: Action[];
}
export default function Layout({ children, actions }: Props) {
  const { t } = useTranslation("common");
  const home = t("home");
  const trending = t("trending");
  const top100 = t("top100");
  const newVideo = t("new");

  const menus: Menu[] = [
    {
      title: home,
      href: "/",
    },
    {
      title: trending,
      href: "/trending",
    },
    {
      title: top100,
      href: "/top100",
    },
    {
      title: newVideo,
      href: "/new",
    },
  ];

  return (
    <div>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Stack direction={"row"} alignItems={"center"} mr={5} spacing={2}>
            <Image
              src={"/images/logo.jpg"}
              alt={"logo"}
              width={50}
              height={50}
            />
            Trade
          </Stack>
          <Stack spacing={3} direction={"row"} sx={{ width: "100%" }}>
            {menus.map((menu) => (
              <Link href={menu.href} key={menu.href}>
                <Button>{menu.title}</Button>
              </Link>
            ))}
            <Box flex={5}>
              <SearchField />
            </Box>
            <UserAvatar />
            {actions.map((action) => (
              <Link href={action.link} key={action.title}>
                <Tooltip title={action.title}>
                  <IconButton>{action.icon}</IconButton>
                </Tooltip>
              </Link>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <main>{children}</main>
    </div>
  );
}
