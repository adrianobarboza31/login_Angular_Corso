export class user {
  nome: string;
  cognome: string;
  status: boolean;
  cambi: number;
  constructor(nome: string, cognome: string, status: boolean, cambi: number) {
    this.nome = nome;
    this.cognome = cognome;
    this.status = status;
    this.cambi = cambi;
  }
}
