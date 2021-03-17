import Item from './Item';

function ShoppingList({list=[]}) {
  return (
    <>
      {list.map(item => {
        const {id} = item;
        return (
          <Item key={id} item={item}/>
        )
      })}
    </>
  );
}

export default ShoppingList;
