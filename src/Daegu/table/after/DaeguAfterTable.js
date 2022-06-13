import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(rank, name, category, count) {
  return { rank, name, category, count};
}

const rows = [
  createData(1,'서문시장','쇼핑',"241,136"),
  createData(2,'대구국제공항','기타관광',"226,802"),
  createData(3,'수성못','자연관광',"202,188"),
  createData(4,'대구농수산물도매시장','쇼핑',"165,659"),
  createData(5,'옥연지송해공원','문화관광',"157,923"),
];

function DaeguAfterTable() {
  return (
    <>
    <div>
      <h3 align= "center">대구 관광지 검색순위(코로나 후)</h3>
    </div>
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><b>순위</b></TableCell>
              <TableCell align="right"><b>관광지명</b></TableCell>
              <TableCell align="right"><b>카테고리</b></TableCell>
              <TableCell align="right"><b>검색건수</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.rank}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.rank}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
    
  );
}

export default DaeguAfterTable;