class PessoaEstudante {
  private _nome: string;
  private _matricula: string;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];

  constructor (nome: string, matricula: string, notasProvas: number[], notasTrabalhos: number[]) {
    this._nome = nome;
    this._matricula = matricula;

    if (notasProvas.length !== 4) {
      throw new Error('Invalid number of tests');
    }
    this._notasProvas = notasProvas;

    if (notasTrabalhos.length !== 2) {
      throw new Error('Invalid number of assignments');
    }   
    this._notasTrabalhos = notasTrabalhos;
  }

  somaNotas(notas: number[]): number {
    return notas.reduce((acc, nota) => acc + nota, 0);
  }

  mediaNotas(notas: number[]): number {
    return this.somaNotas(notas) / notas.length;
  }
}