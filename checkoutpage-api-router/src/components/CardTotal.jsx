import React from "react";

const taxRate = 0.18;

const CardTotal = ({ products }) => {
  const subTotal = products.reduce(
    (acc, { price, amount, dampingRate }) => acc + price * amount * dampingRate,
    0
  );
  let shipping = subTotal / 25 < 10 ? 10 : subTotal / 25;
  if (shipping > 300) {
    shipping = subTotal / 35;
  } else if (shipping > 200) {
    shipping = subTotal / 30;
  } else {
    shipping = shipping;
  }
  // console.log(subTotal);
  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{subTotal.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{(subTotal * taxRate).toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">
              {(subTotal + shipping + taxRate * subTotal).toFixed(2)}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
