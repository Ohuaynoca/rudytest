import { Contacto, contactos } from "./contactos";

const findOneByEmail = (email: string): Contacto => {
  const encontrados = contactos.filter((contacto) =>
    contacto.email.includes(email),
  );
  return encontrados[0];
};

export { findOneByEmail };
