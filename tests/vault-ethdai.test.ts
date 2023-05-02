import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Borrow } from "../generated/schema"
import { Borrow as BorrowEvent } from "../generated/VaultETHDAI/VaultETHDAI"
import { handleBorrow } from "../src/vault-ethdai"
import { createBorrowEvent } from "./vault-ethdai-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let userAddrs = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let asset = Address.fromString("0x0000000000000000000000000000000000000001")
    let amount = BigInt.fromI32(234)
    let newBorrowEvent = createBorrowEvent(userAddrs, asset, amount)
    handleBorrow(newBorrowEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Borrow created and stored", () => {
    assert.entityCount("Borrow", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Borrow",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "userAddrs",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Borrow",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "asset",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Borrow",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
