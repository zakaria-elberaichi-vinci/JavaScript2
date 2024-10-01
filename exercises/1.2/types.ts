interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;

export type { Pizza, NewPizza, PizzaToUpdate };

interface Film{
  id : number;
  title : string;
  director : string;
  duration : number;
  budget? : number;
  description? : string;
  imageUrl? : string 
}

export type {Film};