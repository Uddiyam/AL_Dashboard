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
  createData(1,'제주국제공항','기타관광',"1,239,156"),
  createData(2,'동문재래시장','쇼핑',"606,319"),
  createData(3,'서귀포매일올레시장','쇼핑',"514,081"),
  createData(4,'협재해수욕장','자연관광',"370,710"),
  createData(5,'함덕해수욕장','자연관광',"363,719"),
];

function JejuAfterTable() {
  return (
    <>
    <div>
      <h3 align= "center">제주 관광지 검색순위(코로나 후)</h3>
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

export default JejuAfterTable;