import React, { useState } from 'react';
import { Row, Col, Button, Typography, Space } from 'antd';
import FieldItem from './FieldItem';
import JSONPreview from './JSONPreview';

const { Title } = Typography;

const defaultField = () => ({
  key: '',
  type: 'string',
  nestedFields: [],
});

const renderSchema = (fields) => {
  const schema = {};
  fields.forEach((field) => {
    if (!field.key) return;
    if (field.type === 'nested') {
      schema[field.key] = renderSchema(field.nestedFields);
    } else {
      schema[field.key] = field.type;
    }
  });
  return schema;
};

const SchemaBuilder = () => {
  const [fields, setFields] = useState([defaultField()]);

  const updateField = (index, updatedField) => {
    const newFields = [...fields];
    newFields[index] = { ...newFields[index], ...updatedField };
    setFields(newFields);
  };

  const removeField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const addField = () => {
    setFields([...fields, defaultField()]);
  };

  const addNestedField = (parentIndex) => {
    const newFields = [...fields];
    newFields[parentIndex].nestedFields.push(defaultField());
    setFields(newFields);
  };

  const updateNestedField = (parentIndex, nestedIndex, updatedNested) => {
    const newFields = [...fields];
    newFields[parentIndex].nestedFields[nestedIndex] = {
      ...newFields[parentIndex].nestedFields[nestedIndex],
      ...updatedNested,
    };
    setFields(newFields);
  };

  const removeNestedField = (parentIndex, nestedIndex) => {
    const newFields = [...fields];
    newFields[parentIndex].nestedFields.splice(nestedIndex, 1);
    setFields(newFields);
  };

  return (
    <Row gutter={16} style={{ padding: '12px' }}>
      <Col xs={24} md={12}>
        <Title level={5}>Schema Builder</Title>
        <Space direction="vertical" style={{ width: '100%' }}>
          {fields.map((field, index) => (
            <FieldItem
              key={index}
              field={field}
              index={index}
              onUpdateField={updateField}
              onRemoveField={removeField}
              onAddNestedField={addNestedField}
              onUpdateNestedField={updateNestedField}
              onRemoveNestedField={removeNestedField}
            />
          ))}
          <Button type="primary" onClick={addField} block size="small">
            + Add Field
          </Button>
        </Space>
      </Col>

      <Col xs={24} md={12}>
        <Title level={5}>Generated JSON</Title>
        <JSONPreview json={renderSchema(fields)} />
      </Col>
    </Row>
  );
};

export default SchemaBuilder;
