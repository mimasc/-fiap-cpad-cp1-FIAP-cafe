import React, { createContext, useState } from 'react';
 
// Criando o contexto
export const CartContext = createContext();
 
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
 
  // Função para adicionar itens
  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.nome} adicionado ao carrinho!`);
  };
 
  // Calcula o valor total automaticamente
  const total = cart.reduce((soma, item) => soma + item.preco, 0);
 
  return (
    <CartContext.Provider value={{ cart, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
