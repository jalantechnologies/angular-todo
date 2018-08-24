const CODE_BANK = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const CODE_LIMIT = 10;

function genId() {
  let i = 1, code = '';
  do {
    code += CODE_BANK.charAt(Math.floor(Math.random() * CODE_BANK.length));
    i++;
  } while (i <= CODE_LIMIT);
  return code;
}

export class TodoItemModel {
  id: string;
  title: string;
  desc: string;
  addedOn: number;

  constructor(title: string, desc?: string) {
    this.id = genId();
    this.title = title;
    this.desc = desc;
    this.addedOn = Date.now();
  }
}
