"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Box, ThemeProvider } from "@mui/material";

import { theme } from "@/components/PageBottomNavigation";
import goBack from "@/img/goback.svg";
import example from "@/img/example1.png";
import Forward from "@mui/icons-material/ArrowForward";
import Back from "@mui/icons-material/ArrowBack";

export default function Login() {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/app");
  }

  return (
    <div>
      <button
        className="py-1 px-2"
        onClick={handleGoBack}
      >
        <Image
          src={goBack}
          alt="Voltar"
          width={53}
          priority={true}
          quality={100}
          title="Voltar"
        />
      </button>

      <ThemeProvider theme={theme}>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 1,
            maxWidth: 400,
            margin: "0 auto",
          }}
        >
          <div className="text-xl w-fit font-black text-[#FFF] bg-[#554FFF] py-2 px-3 rounded-xl fixed top-4 right-4">s2/4</div>
          
          <h1 className="text-5xl font-black text-[#554FFF] py-3">
            Criação de memórias
          </h1>

          <h4 className="text-xl font-black text-[#554FFF] py-3">
            Para criar novas memórias é necessário dar um duplo clique em uma área do mapa, no lugar que deseja colocar a agulha de referência.
          </h4>

          <div className="w-full flex items-center justify-center">
            <Image
              src={example}
              alt="Exemplo"
              width={250}
              priority={true}
              quality={100}
              title="Exemplo"
            />
          </div>

          <div
            className="text-xl w-fit font-black text-[#FFF] bg-[#554FFF] py-2 px-3 pb-3 rounded-xl fixed bottom-4 right-4 hover:cursor-pointer"
            onClick={()=> {router.push("/tutorial/step/3")}}
          >
            <Forward />
          </div>

          <div
            className="text-xl w-fit font-black text-[#FFF] bg-[#554FFF] py-2 px-3 pb-3 rounded-xl fixed bottom-4 left-4 hover:cursor-pointer"
            onClick={()=> {router.push("/tutorial/step/1")}}
          >
            <Back />
          </div>
        </Box>
      </ThemeProvider>
    </div>
  );
}
