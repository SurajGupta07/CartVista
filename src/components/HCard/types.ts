export interface IHCardProps {
  image: string;
  title: string;
  subtitle: string;
  quantity: number;
  showQuantity: boolean;
  updateQuantity: () => void;
  decreaseQuantity: () => void;
}
