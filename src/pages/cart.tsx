import FoodCard from "@/components/food-card";
import { Cart2Icon } from "@/components/icons";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { AppContext } from "@/lib/providers/app-provider";
import bannerImage from "../resources/images/img-banner.png";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  getKeyValue,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
  Form,
  Input,
} from "@heroui/react";
import { useContext, useMemo, useRef, useState } from "react";
import AppUtils from "@/lib/utils/utils";
import { EMPTY_CART_STATE } from "@/constants";
import { useNavigate } from "react-router-dom";
import {
  emailSchema,
  fullnameSchema,
  houseSchema,
  phoneSchema,
  pincodeSchema,
  streetSchema,
  userProfileSchema,
  Validations,
} from "@/lib/utils/validations";
import { ValidationErrors } from "@react-types/shared";

const CartPage = () => {
  const { appState, updateAppState } = useContext(AppContext);

  const cartState = appState.cart;
  const userProfileState = appState.userProfile;

  const [formValidationResult, setFormValidationResult] =
    useState<FormValidationResult | null>(null);
  const {
    isOpen: isShowConfirmCancel,
    onOpen: showConfirmCancel,
    onClose: closeConfirmCancel,
  } = useDisclosure();
  const {
    isOpen: isShowCheckout,
    onOpen: showCheckout,
    onClose: closeCheckout,
  } = useDisclosure();
  const checkoutRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const updateCartState = (updatedCart: Cart) => {
    updateAppState({ ...appState, cart: updatedCart });
  };

  const updateUserProfileState = (updatedUserProfile: UserProfile) => {
    updateAppState({ ...appState, userProfile: updatedUserProfile });
  };

  const handleCancelOrder = (isConfirmed: boolean) => {
    closeConfirmCancel();
    if (isConfirmed) {
      updateCartState(EMPTY_CART_STATE);
      navigate("/");
    }
  };

  const handleCheckout = (isConfirmed: boolean) => {
    if (isConfirmed) {
      checkoutRef.current.requestSubmit();
    } else {
      closeCheckout();
    }
  };

  const handleQuantityChange = (foodItem: FoodItem, newQuantity: number) => {
    foodItem.quantity = newQuantity;
    const updatedItems = cartState.items.map((item) =>
      item.id === foodItem.id ? foodItem : item,
    );
    updateCartState({ ...cartState, items: updatedItems });
  };

  const handleItemRemoved = (foodItem: FoodItem) => {
    updateCartState({
      ...cartState,
      items: (cartState?.items ?? []).filter((item) => item.id !== foodItem.id),
    });
  };

  const appliedOffer = useMemo(() => {
    if (cartState?.offers?.length > 0) {
      return AppUtils.getBestOffer(cartState.offers, cartState?.items ?? [], 0);
    }

    return null;
  }, [cartState?.offers]);

  const cartItems = useMemo(() => {
    if (cartState?.items?.length > 0) {
      return cartState.items.map((item) => {
        return { ...item, total: item.quantity * item.price };
      });
    }

    return [];
  }, [cartState?.items]);

  const orderTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.total, 0);
  }, [cartItems]);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Your cart</h1>
          {cartState?.items?.length === 0 && (
            <Alert
              title="Cart empty"
              description="Your cart does not contain any item. Use menu to add items to cart"
              className="text-start mt-10"
              endContent={
                <Link color="warning" href="/">
                  Menu
                </Link>
              }
            />
          )}
        </div>
      </section>
      {cartItems.length > 0 && (
        <section className="flex justify-center items-center">
          <Card className="w-3/4">
            <CardHeader className="flex flex-row gap-4 items-center justify-between">
              <div className="flex gap-3">
                <div className="text-warning">
                  <Cart2Icon size={48} />
                </div>
                <div className="flex flex-col">
                  <p className="text-md">Current Order</p>
                  <p className="text-small text-default-500">
                    RaftLabs Pizzeria, Palaaj
                  </p>
                </div>
              </div>
              <Button
                variant="light"
                color="danger"
                onPress={() => showConfirmCancel()}
              >
                Cancel Order
              </Button>
            </CardHeader>
            <Divider />
            <CardBody className="grid grid-cols-2 gap-4">
              <div className="h-[428px] overflow-y-auto">
                <div className="flex flex-col flex-grow gap-4">
                  {cartItems.map((foodItem, index) => (
                    <FoodCard
                      key={index}
                      item={foodItem}
                      image={bannerImage}
                      isCartView
                      onQuantityChange={(newQuantity) =>
                        handleQuantityChange(foodItem, newQuantity)
                      }
                      onItemRemove={() => handleItemRemoved(foodItem)}
                    />
                  ))}
                </div>
              </div>
              <Card className="col-span-1">
                <CardHeader className="text-2xl">Order Summary</CardHeader>
                <Divider />
                <CardBody>
                  <Table
                    aria-label="Example table with client async pagination"
                    className="h-[300px] overflow-y-auto"
                    isHeaderSticky
                  >
                    <TableHeader>
                      <TableColumn key="title">Item</TableColumn>
                      <TableColumn key="quantity">Quantity</TableColumn>
                      <TableColumn key="total">Total</TableColumn>
                    </TableHeader>
                    <TableBody
                      items={cartItems}
                      loadingContent={<Spinner />}
                      emptyContent={"No orders placed yet."}
                    >
                      {(item) => (
                        <TableRow key={item?.title}>
                          {(columnKey) => (
                            <TableCell>
                              {columnKey === "total"
                                ? AppUtils.formatCurrency(
                                    getKeyValue(item, columnKey),
                                  )
                                : getKeyValue(item, columnKey)}
                            </TableCell>
                          )}
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardBody>
                <Divider />
                <CardFooter className="flex flex-col gap-4">
                  {appliedOffer && (
                    <>
                      <div className="w-full flex gap-4 justify-between">
                        {`Offer applied: ${appliedOffer.title}`}
                        <span>
                          -{AppUtils.formatCurrency(appliedOffer.discount)}
                        </span>
                      </div>
                      <Divider />
                    </>
                  )}
                  <div className="w-full font-bold flex gap-4 justify-between">
                    Order Total
                    <span>{AppUtils.formatCurrency(orderTotal)}</span>
                  </div>
                </CardFooter>
              </Card>
            </CardBody>
            <Divider />
            <CardFooter className="flex flex-row gap-4 items-center justify-end">
              <Button
                color="warning"
                className="font-bold uppercase"
                onPress={() => showCheckout()}
              >
                Checkout
              </Button>
            </CardFooter>
          </Card>
        </section>
      )}
      {/* Cancel Order Modal */}
      <Modal
        backdrop="blur"
        isOpen={isShowConfirmCancel}
        onClose={() => handleCancelOrder(false)}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cancel Order
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to cancel the order.</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="default"
                  variant="light"
                  onPress={() => handleCancelOrder(false)}
                >
                  Don't cancel
                </Button>
                <Button
                  color="danger"
                  variant="bordered"
                  onPress={() => handleCancelOrder(true)}
                >
                  Continue cancelling
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* Checkout Modal */}
      <Modal
        backdrop="blur"
        isOpen={isShowCheckout}
        onClose={() => handleCheckout(false)}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Checkout - Order details
              </ModalHeader>
              <ModalBody>
                <Form
                  validationBehavior="aria"
                  ref={checkoutRef}
                  className="w-full flex flex-col gap-4"
                  validationErrors={
                    formValidationResult?.errors
                      ? (formValidationResult?.errors as ValidationErrors)
                      : null
                  }
                  onSubmit={(e) => {
                    e.preventDefault();
                    let data = Object.fromEntries(
                      new FormData(e.currentTarget),
                    ) as UserProfile;

                    const result = Validations.validateForm(
                      data,
                      userProfileSchema,
                    );

                    if (result.isValid) {
                      updateUserProfileState(data);
                      closeCheckout();
                    } else {
                      setFormValidationResult(result);
                    }
                  }}
                >
                  <Input
                    isRequired
                    label="Fullname"
                    labelPlacement="outside"
                    name="fullname"
                    placeholder="Enter your fullname"
                    type="text"
                    defaultValue={userProfileState.fullname}
                    validate={(value: string) => {
                      if (!AppUtils.isEmpty(value)) {
                        const result = Validations.validate(
                          value,
                          fullnameSchema,
                        );

                        return result.isValid ? null : result.error;
                      }

                      return null;
                    }}
                  />

                  <Input
                    isRequired
                    label="House / Building"
                    labelPlacement="outside"
                    name="house"
                    placeholder="Enter your house / building details"
                    type="text"
                    defaultValue={userProfileState.house}
                    validate={(value: string) => {
                      if (!AppUtils.isEmpty(value)) {
                        const result = Validations.validate(value, houseSchema);

                        return result.isValid ? null : result.error;
                      }

                      return null;
                    }}
                  />

                  <Input
                    isRequired
                    label="Street"
                    labelPlacement="outside"
                    name="street"
                    placeholder="Enter your street details"
                    type="text"
                    defaultValue={userProfileState.street}
                    validate={(value: string) => {
                      if (!AppUtils.isEmpty(value)) {
                        const result = Validations.validate(
                          value,
                          streetSchema,
                        );

                        return result.isValid ? null : result.error;
                      }

                      return null;
                    }}
                  />

                  <Input
                    isRequired
                    label="Pincode"
                    labelPlacement="outside"
                    name="pincode"
                    placeholder="Enter your pincode"
                    type="text"
                    defaultValue={userProfileState.pincode}
                    validate={(value: string) => {
                      if (!AppUtils.isEmpty(value)) {
                        const result = Validations.validate(
                          value,
                          pincodeSchema,
                        );

                        return result.isValid ? null : result.error;
                      }

                      return null;
                    }}
                  />

                  <Input
                    isRequired
                    label="Email"
                    labelPlacement="outside"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    defaultValue={userProfileState.email}
                    validate={(value: string) => {
                      if (!AppUtils.isEmpty(value)) {
                        const result = Validations.validate(value, emailSchema);

                        return result.isValid ? null : result.error;
                      }

                      return null;
                    }}
                  />

                  <Input
                    isRequired
                    label="Mobile"
                    labelPlacement="outside"
                    name="phone"
                    placeholder="Enter your mobile number"
                    type="tel"
                    defaultValue={userProfileState.phone}
                    validate={(value: string) => {
                      if (!AppUtils.isEmpty(value)) {
                        const result = Validations.validate(value, phoneSchema);

                        return result.isValid ? null : result.error;
                      }

                      return null;
                    }}
                  />
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" onPress={() => handleCheckout(true)}>
                  Place order
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </DefaultLayout>
  );
};

export default CartPage;
