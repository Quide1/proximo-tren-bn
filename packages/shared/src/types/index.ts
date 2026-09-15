// types/index.ts
import type { ESTACIONES_BELGRANO_NORTE } from "../constants/index.js"
export type Direccion = "retiro" | "villa_rosa";
export type TipoDia = "habil" | "sabado" | "domingo_feriado";
export type Estacion = (typeof ESTACIONES_BELGRANO_NORTE)[number]

export interface HorarioRecord {
	unidad: string;
	estacion: Estacion;
	horario: string;
	direccion: Direccion;
	tipoDia: TipoDia;
}

