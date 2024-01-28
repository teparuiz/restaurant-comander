import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Error404 = () => {
  return (
    <div>
      <Head>
        <title>Error 404 - Página no encontrada</title>
      </Head>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">
            ¡Ha ocurrido un problema! Página no encontrada
          </h1>
          <Image
            src="https://http.dog/404.jpg"
            alt="Error 404"
            height={400}
            width={400}
          />
          <div className="d-flex justify-content-center mt-5">
            <Link href={"/"}>Regresar al inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;