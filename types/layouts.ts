export interface IDrawer {
  label: string;
  route: string;
  icon?: string;
  active: boolean;
  children?: IDrawer[];
}
