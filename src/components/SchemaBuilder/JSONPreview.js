import React from 'react';
import { Card } from 'antd';

const JSONPreview = ({ json }) => {
  return (
    <Card size="small">
      <pre style={{ whiteSpace: 'pre-wrap', fontSize: 12 }}>
        {JSON.stringify(json, null, 2)}
      </pre>
    </Card>
  );
};

export default JSONPreview;
