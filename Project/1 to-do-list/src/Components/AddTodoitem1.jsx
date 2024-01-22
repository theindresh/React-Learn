function AddTodoitem1() {
  let todoName = "Good Morning";
  let todoDate = "15-25-15";
  return (
    <div className="row">
      <div className="col-5">{todoName}</div>
      <div className="col-3">{todoDate}</div>
      <div className="col-3">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}
export default AddTodoitem1;
