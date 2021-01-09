import { formatPrice } from "./helpers";

type Props = {
  amount: number;
  totalPrice: number;
  onSubmit: () => void;
}

function OrderSummary ({ amount, totalPrice, onSubmit }: Props) {
  return (
    <nav className="order-summary-container">
      <div className="order-summary-content">
        <div>
          <span className="amout-selected-container">
            <strong className="amount-selected">{amount}</strong>
            PEDIDOS SELECIONADOS
          </span>
          <span className="order-summary-total">
            <strong className="amount-selected">{formatPrice(totalPrice)}</strong>
            VALOR TOTAL
          </span>
        </div>
        <button
          className="order-summary-make-order"
          onClick={onSubmit}
        >
          FAZER PEDIDO
        </button>
      </div>
    </nav>
  );
}

export default OrderSummary;