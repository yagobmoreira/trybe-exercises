class PessoaEstudante {
  private _nome: string;
  private _matricula: string;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];

  constructor (nome: string, matricula: string) {
    this._nome = nome;
    this._matricula = matricula;
  }
  
  get matricula(): string { return this._matricula; }
  
  set matricula(newMatricula: string) { this._matricula = newMatricula; }
  
  get nome(): string { return this._nome; }

  set nome(newNome: string) { 
    if (newNome.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres');
    this._nome = newNome; 
  }

  get notasProvas(): number[] { return this._notasProvas; }
  
  set notasProvas(newNotasProvas: number[]) { 
    if (newNotasProvas.length > 4) {
      throw new Error('A pessoa estudante só pode ter 4 notas de prova');
    }
    this._notasProvas = newNotasProvas; 
  }

  get notasTrabalhos(): number[] { return this._notasTrabalhos; }

  set notasTrabalhos(newNotasTrabalhos: number[]) { 
    if (newNotasTrabalhos.length > 2) {
      throw new Error('A pessoa estudante só pode ter 2 notas de trabalho');
    }
    this._notasTrabalhos = newNotasTrabalhos; 
  }
  somaNotas(notas: number[]): number {
    return notas.reduce((acc, nota) => acc + nota, 0);
  }

  mediaNotas(notas: number[]): number {
    return this.somaNotas(notas) / notas.length;
  }


}