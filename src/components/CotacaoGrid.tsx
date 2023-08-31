import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const CotacaoGrid: React.FC = () => {
  const data = [
    { date: '04/02/2022', description: 'Exclusão do Local de Risco 2 (CEP: 04012-120 - Av. Conselheiro Rodrigues Alves, 250 - Vila Mariana - São Paulo/SP) ', user: '@cperez', version: '2' },
    { date: '2023-08-02', description: 'Inclusão de cláusula', user: '@cperez', version: '2' },
    { date: '2023-08-02', description: 'Observação', user: '@cperez', version: '2' },
    { date: '2023-08-02', description: 'Cotação 1234567 recusada: local de risco', user: '@cperez', version: '1' },
  ];

  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
      <TableContainer component={Paper}>
        <Table sx={tableStyle}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={4} sx={titleCellStyle}>
                Histórico do Cliente
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={tableHeaderStyle}>Data</TableCell>
              <TableCell sx={tableHeaderStyle}>Descrição</TableCell>
              <TableCell sx={tableHeaderStyle}>Usuário</TableCell>
              <TableCell sx={tableHeaderStyle}>Versão</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                sx={index % 2 === 0 ? tableRowEvenStyle : tableRowOddStyle}
              >
                <TableCell sx={{ ...tableCellStyle, display: 'flex', alignItems: 'center' }}>
                  <FiberManualRecordIcon sx={{ color: getCircleColor(index), fontSize: '12px', marginRight: '4px' }} />
                  {item.date}
                </TableCell>
                <TableCell sx={tableCellStyle}>{item.description}</TableCell>
                <TableCell sx={tableCellStyle}>{item.user}</TableCell>
                <TableCell sx={tableCellStyle}>{item.version}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const getCircleColor = (index: number): string => {
  const colors = ['red', 'green', 'green', 'red'];
  return colors[index % colors.length];
};

const titleCellStyle: React.CSSProperties = {
  fontSize: '20px',
  paddingTop: '20px',
  paddingBottom: '20px',
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  marginBottom: '20px',
};

const tableHeaderStyle: React.CSSProperties = {
  backgroundColor: '#f2f2f2',
  textAlign: 'center',
};

const tableRowEvenStyle: React.CSSProperties = {
  backgroundColor: '#f9f9f9',
};

const tableRowOddStyle: React.CSSProperties = {
  backgroundColor: '#f2f2f2',
};

const tableCellStyle: React.CSSProperties = {
  textAlign: 'center',
  fontSize: '14px',
};

export default CotacaoGrid;
