import React from "react";
import Flex from "../styles/Flex";
import Title from "../hooks/Title";
import Link from "next/link";
import { footerItems } from "@/scripts/footerItems";

const FooterListItems = () => {
  return (
    <Flex
      css={{
        width: "100vw",
        justifyContent: "center",
        alignItems: "flex-start",
        columnGap: "40px",
        padding: "2rem", 
      }}
    >
      {footerItems.map((item) => (
        <Flex
          key={item.id}
          css={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "12px",
            minWidth: "150px",
            fontWeight: "600",
            paddingBottom: "10px",
          }}
        >
          <Title color="white">
            <span className="text-xl font-bold capitalize">{item.name}</span>
          </Title>
          <ul>
            {item.properties.map((property, index) => (
              <li key={index}>
                <Link href="/" className="text-white text-sm hover:underline">
                  {property.name}
                </Link>
              </li>
            ))}
          </ul>
        </Flex>
      ))}
    </Flex>
  );
};

export default FooterListItems;
