import { Card, Space } from "antd";
import { useContext } from "react";
import { TableContext } from "../../context/context/TableContext";

const Preview = () => {
  const { user } = useContext(TableContext);

  return (
    <div>
      {user ? (
        <Space direction="vertical" size={16}>
          <Card
            title="User Details"
            extra={<a href="#">More</a>}
            style={{
              width: 300,
            }}
          >
            <p>{user ? user.name : ""}</p>
            <p>{user ? user.age : ""}</p>
            <p>{user ? user.address : ""}</p>
          </Card>
        </Space>
      ) : (
        <p>No User selected</p>
      )}
    </div>
  );
};
export default Preview;
