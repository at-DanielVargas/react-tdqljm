import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Grid from './Grid';
import Row from './Row';
import Box from './Box';

const App = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      boxes: [
        { id: 1, text: 'Box 1', x: 0, y: 0, width: 3, height: 2 },
        { id: 2, text: 'Box 2', x: 3, y: 0, width: 3, height: 2 },
        { id: 3, text: 'Box 3', x: 6, y: 0, width: 3, height: 2 },
      ],
    },
  ]);

  const handleAddRow = () => {
    const newRow = { id: Date.now(), boxes: [] };
    setRows([...rows, newRow]);
  };

  const handleAddBox = (rowId) => {
    const newBox = {
      id: Date.now(),
      text: `Box ${Date.now()}`,
      x: 0,
      y: 0,
      width: 3,
      height: 2,
    };
    const updatedRows = rows.map((row) =>
      row.id === rowId ? { ...row, boxes: [...row.boxes, newBox] } : row
    );
    setRows(updatedRows);
  };

  const handleSaveLayout = () => {
    const layout = rows.map((row) => ({
      id: row.id,
      boxes: row.boxes.map((box) => ({
        id: box.id,
        x: box.x,
        y: box.y,
        width: box.width,
        height: box.height,
      })),
    }));
    console.log(JSON.stringify(layout));
  };

  return (
    <div>
      <button onClick={handleAddRow}>Agregar Fila</button>
      <button onClick={handleSaveLayout}>Guardar Layout</button>
      <DndProvider backend={HTML5Backend}>
        <Grid>
          {rows.map((row) => (
            <Row key={row.id}>
              {row.boxes.map((box) => (
                <Box
                  key={box.id}
                  id={box.id}
                  text={box.text}
                  x={box.x}
                  y={box.y}
                  width={box.width}
                  height={box.height}
                  setRows={setRows}
                  rows={rows}
                  rowId={row.id}
                />
              ))}
              <button onClick={() => handleAddBox(row.id)}>Agregar Box</button>
            </Row>
          ))}
        </Grid>
      </DndProvider>
    </div>
  );
};

export default App;
