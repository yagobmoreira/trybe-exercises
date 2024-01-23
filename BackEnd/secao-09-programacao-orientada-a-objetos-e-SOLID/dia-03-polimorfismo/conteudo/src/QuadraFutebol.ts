import Quadra from "./Quadra";
import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import normas from "./normas/normasDeUso";

export default class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol;

  protected reservar<IFutebol>(horaReservada: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: horaReservada,
      regras: this.futebolData as IFutebol,
    }
  }
}