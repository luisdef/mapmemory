"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { Box, ThemeProvider } from "@mui/material";

import { theme } from "@/components/PageBottomNavigation";
import goBack from "@/img/goback.svg";
import Forward from "@mui/icons-material/ArrowForward";
import Back from "@mui/icons-material/ArrowBack";
import Widgets from "@mui/icons-material/Widgets";
import Dice from "@mui/icons-material/Casino";
import Person from "@mui/icons-material/Person";

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
          <div className="text-xl w-fit font-black text-[#FFF] bg-[#554FFF] py-2 px-3 rounded-xl fixed top-4 right-4">3/4</div>
          
          <h1 className="text-5xl font-black text-[#554FFF] py-3">
            Visualização de memórias
          </h1>

          <h4 className="text-xl font-black text-[#554FFF] py-3">
            Para visualizar as suas memórias lembre-se de clicar num ícone como representado abaixo.
          </h4>

          <div className="w-full flex items-center text-[#554FFF] justify-center">
            <Widgets fontSize="large" />
          </div>

          <h4 className="text-xl font-black text-[#554FFF] py-3">
            Para visualizar uma memória aleatoriamente clique no ícone como representado abaixo.
          </h4>

          <div className="w-full flex items-center text-[#554FFF] justify-center">
            <Dice fontSize="large" />
          </div>

          <h4 className="text-xl font-black text-[#554FFF] py-3">
            Na área de navegação, clicando no botão com a imagem representada abaixo, você pode realizar o login, acessar a página de criação de conta, além de poder editá-la ou excluí-la.
          </h4>

          <div className="w-full flex items-center text-[#554FFF] justify-center">
            <Person fontSize="large" />
          </div>

          <div
            className="text-xl w-fit font-black text-[#FFF] bg-[#554FFF] py-2 px-3 pb-3 rounded-xl fixed bottom-4 right-4 hover:cursor-pointer"
            onClick={()=> {router.push("/tutorial/step/4")}}
          >
            <Forward />
          </div>

          <div
            className="text-xl w-fit font-black text-[#FFF] bg-[#554FFF] py-2 px-3 pb-3 rounded-xl fixed bottom-4 left-4 hover:cursor-pointer"
            onClick={()=> {router.push("/tutorial/step/2")}}
          >
            <Back />
          </div>
        </Box>
      </ThemeProvider>
    </div>
  );
}
