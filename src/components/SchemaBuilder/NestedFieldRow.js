import React from 'react';
import { Row, Col, Input, Select, Button } from 'antd';

const { Option } = Select;

const NestedFieldItem = ({
  parentIndex,
  nestedIndex,
  nested,
  onUpdateNestedField,
  onRemoveNestedField,
}) => {
  return (
    <Row gutter={8} align="middle">
      <Col flex="1">
        <Input
          size="small"
          placeholder="Nested name"
          value={nested.key}
          onChange={(e) =>
            onUpdateNestedField(parentIndex, nestedIndex, { key: e.target.value })
          }
        />
      </Col>
      <Col flex="1">
        <Select
          size="small"
          value={nested.type}
          style={{ width: '100%' }}
          onChange={(value) =>
            onUpdateNestedField(parentIndex, nestedIndex, { type: value })
          }
        >
          <Option value="string">string</Option>
          <Option value="number">number</Option>
        </Select>
      </Col>
      <Col>
        <Button
          size="small"
          danger
          onClick={() => onRemoveNestedField(parentIndex, nestedIndex)}
        >
          ❌
        </Button>
      </Col>
    </Row>
  );
};

export default NestedFieldItem;
