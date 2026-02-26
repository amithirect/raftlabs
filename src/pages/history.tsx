import { useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  getKeyValue,
} from "@heroui/react";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { AppContext } from "@/lib/providers/app-provider";
import { useContext } from "react";

const HistoryPage = () => {
  const rowsPerPage = 10;
  const { appState } = useContext(AppContext);

  const cartState = appState.cart;

  const pages = useMemo(() => {
    return cartState?.items?.length > 0
      ? Math.ceil(cartState.items?.length / rowsPerPage)
      : 0;
  }, [cartState?.items, rowsPerPage]);

  const loadingState = "idle";

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Orders History</h1>
        </div>
      </section>
      <section>
        <Table aria-label="Order history">
          <TableHeader>
            <TableColumn key="id">Order#</TableColumn>
            <TableColumn key="description">Items</TableColumn>
            <TableColumn key="price">Total</TableColumn>
            <TableColumn key="title">Status</TableColumn>
          </TableHeader>
          <TableBody
            items={[]}
            loadingContent={<Spinner />}
            loadingState={loadingState}
            emptyContent={"No orders placed yet."}
          >
            {(item) => (
              <TableRow key={item?.title}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </DefaultLayout>
  );
};

export default HistoryPage;
