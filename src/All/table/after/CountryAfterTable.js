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
  createData(1,'스타필드하남','쇼핑',"2,954,846"),
  createData(2,'김포국제공항국내선','기타관광',"2,221,053"),
  createData(3,'스타필드고양','쇼핑',"2,122,156"),
  createData(4,'현대프리미엄아울렛김포점','쇼핑',"1,691,765"),
  createData(5,'신세계프리미엄아울렛여주점(EAST)','쇼핑',"1,455,577"),
];

function CountryAfterTable() {
  return (
    <>
    <div>
      <h3 align= "center">전국 관광지 검색순위(코로나 후)</h3>
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

export default CountryAfterTable;