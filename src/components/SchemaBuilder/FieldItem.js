import React from 'react';
import { Row, Col, Input, Select, Button, Card, Space } from 'antd';
import NestedFieldItem from './NestedFieldRow';

const { Option } = Select;

const FieldItem = ({
  field,
  index,
  onUpdateField,
  onRemoveField,
  onAddNestedField,
  onUpdateNestedField,
  onRemoveNestedField,
}) => {
  return (
    <Card size="small" bodyStyle={{ padding: '6px' }}>
      <Row gutter={8} align="middle">
        <Col flex="1">
          <Input
            size="small"
            placeholder="Field name"
            value={field.key}
            onChange={(e) => onUpdateField(index, { key: e.target.value })}
          />
        </Col>
        <Col flex="1">
          <Select
            size="small"
            value={field.type}
            style={{ width: '100%' }}
            onChange={(value) => onUpdateField(index, { type: value })}
          >
            <Option value="string">string</Option>
            <Option value="number">number</Option>
            <Option value="nested">nested</Option>
          </Select>
        </Col>
        <Col>
          <Button size="small" danger onClick={() => onRemoveField(index)}>
            ❌
          </Button>
        </Col>
      </Row>

      {field.type === 'nested' && (
        <div style={{ marginTop: 10, marginLeft: 20 }}>
          <Space direction="vertical" style={{ width: '100%' }}>
            {field.nestedFields.map((nested, nestedIndex) => (
              <NestedFieldItem
                key={nestedIndex}
                parentIndex={index}
                nestedIndex={nestedIndex}
                nested={nested}
                onUpdateNestedField={onUpdateNestedField}
                onRemoveNestedField={onRemoveNestedField}
              />
            ))}
            <Button
              size="small"
              type="primary"
              onClick={() => onAddNestedField(index)}
              style={{ width: '100%' }}
            >
              + Add Nested Field
            </Button>
          </Space>
        </div>
      )}
    </Card>
  );
};

export default FieldItem;
