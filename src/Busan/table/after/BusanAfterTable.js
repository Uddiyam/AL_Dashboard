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
  createData(1,'롯데프리미엄아울렛동부산점','쇼핑',"828,891"),
  createData(2,'이케아동부산점','쇼핑',"750,530"),
  createData(3,'김해공항국내선청사','기타관광',"652,554"),
  createData(4,'신세계프리미엄아울렛부산점','쇼핑',"541,841"),
  createData(5,'김해국제공항','기타관광',"538,368"),
];

function BusanAfterTable() {
  return (
    <>
    <div>
      <h3 align= "center">부산 관광지 검색순위(코로나 후)</h3>
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

export default BusanAfterTable;