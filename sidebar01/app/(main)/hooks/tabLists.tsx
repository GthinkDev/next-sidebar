'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import React, { FC, memo, useState } from 'react'
import { Button } from '@/components/ui/button'

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV008',
    paymentStatus: 'Paid',
    totalAmount: '$400.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV009',
    paymentStatus: 'Pending',
    totalAmount: '$600.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV010',
    paymentStatus: 'Unpaid',
    totalAmount: '$700.00',
    paymentMethod: 'Credit Card',
  },
]

const TabLists: FC = () => {
  const [lists, setLists] = useState(invoices)
  const handleDelete = (id: string) => {
    setLists(lists.filter((item) => item.invoice !== id))
  }
  return (
    <Table className={'border-1 rounded-lg '}>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader className={'bg-muted rounded-4xl'}>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">操作</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lists.map((item) => (
          <TableRow key={item.invoice}>
            <TableCell className="font-medium">{item.invoice}</TableCell>
            <TableCell>{item.paymentStatus}</TableCell>
            <TableCell>{item.paymentMethod}</TableCell>
            <TableCell className="text-right">{item.totalAmount}</TableCell>
            <TableCell className="text-right">
              <Button
                variant={'outline'}
                size={'sm'}
                onClick={() => handleDelete(item.invoice)}
              >
                删除
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
          <TableCell />
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default memo(TabLists)
