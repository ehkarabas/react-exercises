import { Table } from "react-bootstrap";

const CardTotal = ({ productsTotal, shipping }) => {
  return (
    <article id="card-prices">
      <Table>
        <tbody>
          <tr className="text-end border-botom-2 border-secondary">
            <th className="text-start">Subtotal</th>
            <td>
              &#36;<span className="subtotal">{productsTotal.toFixed(2)}</span>
            </td>
          </tr>
          <tr className="text-end border-botom-2 border-secondary">
            <th className="text-start">Tax(%18)</th>
            <td>
              &#36;
              <span className="tax">{(productsTotal * 0.18).toFixed(2)}</span>
            </td>
          </tr>
          <tr className="text-end border-botom-2 border-secondary">
            <th className="text-start">Shipping</th>
            <td>
              &#36;<span className="shipping">{shipping.toFixed(2)}</span>
            </td>
          </tr>
          <tr className="text-end border-botom-2 border-secondary">
            <th className="text-start">Total</th>
            <td>
              &#36;
              <span className="total">
                {(productsTotal * 1.18 + shipping).toFixed(2)}
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </article>
  );
};

export default CardTotal;
