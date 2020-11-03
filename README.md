# Avila Tek Next.js Template

![Avila Tek Logo](https://avilatek.dev/assets/images/logo_white.png)

Este repositorio es una plantilla para los Landing Page de Avila Tek, esta configurado para clonarlo, instalar las dependencias y empezar a trabajar, en caso de que estes buscando un template para un proyecto [full stack](https://github.com/Avila-Tek/full-stack-template) puedes referirte a este [repositorio](https://github.com/Avila-Tek/full-stack-template).

En [Avila Tek](https://avilatek.dev) estamos comprometido con el Open Source, ya que nuestra compañía ha crecido alrededor de esta gran comunidad y a traves de pequeños proyectos, estamos tratado de volver lo que esta comunidad nos ha dado.

## Contenido

Este proyecto ha incluido y configurado las siguientes dependencias:

1. [Next.js](https://nextjs.org/)
2. [Tailwind css](https://tailwindcss.com/)
3. [Eslint](https://eslint.org/)
4. [Typescript](https://typescriptlang.org/)
5. [NProgress](https://ricostacruz.com/nprogress/)
6. [Sentry](https://sentry.io/)

## Como usarlo

Por primero es clonar este repositorio

```bash
git clone https://github.com/Avila-Tek/next-template.git <folder_name>
```

En donde se debe cambiar `<folder_name>` por el nombre de la carpeta a utilizar. Después git debe eliminarse la carpeta `.git` de este repositorio e iniciar un nuevo proyecto de git al cual le añadirás el correspondiente remoto. Para ello deberás hacer lo siguiente:

```bash
cd <folder_name>
sudo rm -r .git/
git init
```

Una vez configurado git deberás instalar las dependencias e iniciar el servidor de desarrollo, para ellos deberás hacer

```bash
npm install
npm run dev
```

Luego abre tu navegador en [http://localhost:7777](http://localhost:7777) para ver el resultado

### Configurar Sentry

Para configurar Sentry comunicate con el Lead Engineer para que te facilite los token de sentry y como referencia puedes leer el ejemplo de [next.js](https://github.com/vercel/next.js/tree/canary/examples/with-sentry)

## Changelog

Puedes revisar el changelog [aquí](/CHANGELOG.md)

## Dockers

A partir de la version `1.2.0` el repositorio soporta desarrollo remoto con dockers, para utilizarlo debes [descargar](https://docs.docker.com/get-docker/) Docker CE/EE 18.06+ and Docker Compose 1.21+ y las extensiones `ms-vscode-remote.remote-containers`, `ms-azuretools.vscode-docker` para mas información puedes leer este [post](https://code.visualstudio.com/docs/remote/remote-overview)

## Licencia

Este proyecto se encuentra bajo la licencia de MIT

## Autores

1. [Jose R. Quevedo](https://github.com/zoomelectrico)

---

Continuación del README.md generado por `create-next-app`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel](https://vercel.com/) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
