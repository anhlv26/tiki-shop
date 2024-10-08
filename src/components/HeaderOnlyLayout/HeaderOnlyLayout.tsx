import Box from "@mui/material/Box";
import React from "react";
import HeaderComponent from "~/components/HeaderComponent/HeaderComponent";

const HeaderOnlyLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box>
      <HeaderComponent />
      {children}
    </Box>
  );
};

export default HeaderOnlyLayout;
