# ESP32 Robot Car — Control Web Dual Mode (BLE + WiFi)

[![React 18.3.1](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org)
[![Vite 5.4.21](https://img.shields.io/badge/Vite-5.4.21-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Prettier 3.6.2](https://img.shields.io/badge/Prettier-3.6.2-F7B93E?logo=prettier&logoColor=white)](https://prettier.io)
[![ESLint 9.39.1](https://img.shields.io/badge/ESLint-9.39.1-4B3263?logo=eslint&logoColor=white)](https://eslint.org)
[![pnpm 10.20.0](https://img.shields.io/badge/pnpm-10.20.0-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![React Icons 4.12.0](https://img.shields.io/badge/React%20Icons-4.12.0-61DAFB?logo=react&logoColor=white)](https://react-icons.github.io/react-icons/)
[![ESP32-S3](https://img.shields.io/badge/ESP32--S3-supported-2A9D8F)](https://www.espressif.com/en/products/socs/esp32)

# Resumen

Proyecto pequeño para controlar un robot ESP32-S3 desde un navegador en dos modos: BLE (Web Bluetooth) o WiFi (WebSocket). Frontend en React (Vite) y sketches Arduino para BLE (`arduino.ino`) y WiFi (`arduino_wifi.ino`).

Stack mínimo

- Frontend: React + Vite
- Comunicación: Web Bluetooth (BLE) y WebSocket (WiFi)
- ESP32: AsyncWebServer + AsyncTCP + ESP32Servo

Instalación de librerías WiFi (necesarias para `arduino_wifi.ino`)

- https://github.com/ESP32Async/ESPAsyncWebServer
- https://github.com/ESP32Async/AsyncTCP

Quickstart

1. Instala dependencias web y lanza app:

```bash
pnpm install
pnpm dev
```

2. Flashear ESP32:

- Abrir `arduino_wifi.ino` o `arduino.ino` en Arduino IDE/PlatformIO
- Instalar las librerías indicadas arriba (si usas WiFi)
- Seleccionar placa ESP32-S3 y puerto, compilar y subir

Cómo conectar

- BLE: usar el modo BLE en la UI (Chrome/Edge). Dispositivo anunciado: `ADCA07`.
- WiFi: conectar tu PC/teléfono a la red del ESP32 (o usar modo Station), luego conectar al WebSocket mostrado en el Serial (ej.: `ws://192.168.4.1/ws`).

Soporte y contribuciones

- Issues y PRs bienvenidos. Para cambios en el protocolo BLE/WiFi, actualiza también el sketch correspondiente.
