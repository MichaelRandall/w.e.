import React from "react";

//Vendor
import { Avatar, Card, Skeleton } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";

//Images
const FallbackImage =
  "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";

function Information({ actions, details }) {
  const { Meta } = Card;
  return (
    <Card>
      <Skeleton loading={!details.hasOwnProperty("title")} avatar active>
        <Meta
          avatar={<Avatar src={details.img || FallbackImage} />}
          title={details.title}
          description={details.description}
        />
      </Skeleton>
    </Card>
  );
}

export default Information;
