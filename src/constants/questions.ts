import type { Question } from "../types";

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es el propósito principal de la autenticación en un sistema informático?",
    type: "multiple",
    options: [
      "Determinar la identidad de un usuario o proceso",
      "Proteger la integridad de los datos",
      "Acelerar el acceso al sistema",
      "Controlar la carga del procesador"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "La autenticación por OTP se considera un método basado en 'lo que sabes'.",
    type: "boolean",
    correctAnswer: false
  },
  {
    id: 3,
    question: "¿Qué ventaja ofrece el uso de autenticación multifactor (MFA)?",
    type: "multiple",
    options: [
      "Elimina la necesidad de contraseñas",
      "Aumenta la seguridad combinando diferentes tipos de verificación",
      "Permite compartir credenciales de forma segura",
      "Reduce la necesidad de cifrado"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "El reconocimiento facial pertenece al tipo de autenticación 'lo que eres'.",
    type: "boolean",
    correctAnswer: true
  },
  {
    id: 5,
    question: "¿Qué problema busca evitar el uso de 'salts' en contraseñas?",
    type: "multiple",
    options: [
      "Colisiones en el almacenamiento de contraseñas",
      "Ataques de diccionario y tablas rainbow",
      "Pérdida de rendimiento al autenticar usuarios",
      "Errores de sincronización entre servidores"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Un 'nonce' es un número utilizado una sola vez en protocolos de autenticación para evitar repeticiones.",
    type: "boolean",
    correctAnswer: true
  },
  {
    id: 7,
    question: "¿Cuál de los siguientes representa un riesgo de la autenticación basada solo en PIN?",
    type: "multiple",
    options: [
      "No requiere conexión a Internet",
      "Puede ser fácilmente adivinada o robada",
      "Genera hashes únicos cada vez",
      "Usa hardware dedicado"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "La autenticación mutua implica que solo el cliente demuestra su identidad ante el servidor.",
    type: "boolean",
    correctAnswer: false
  }
];
