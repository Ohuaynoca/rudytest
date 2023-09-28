import { Contacto } from "./contactos";

const checkNewContact = (Contacto: Contacto) => {
  return Contacto.first_name != "" && Contacto.last_name != "";
};

export { checkNewContact };
