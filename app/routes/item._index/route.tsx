// export const loader = async (props) => {
//   console.log("ItemIndex loader");
//   return props;
// };

const ItemIndex = (props) => {
  console.log("ItemIndex", props);
  return (
    <div>
      <div>ItemIndex</div>
      {props.children}
    </div>
  );
};

export default ItemIndex;
