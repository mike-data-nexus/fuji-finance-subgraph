import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Borrow,
  Deposit,
  OwnershipTransferred,
  Paused,
  Payback,
  SetActiveProvider,
  Switch,
  Unpaused,
  Withdraw
} from "../generated/VaultETHDAI/VaultETHDAI"

export function createBorrowEvent(
  userAddrs: Address,
  asset: Address,
  amount: BigInt
): Borrow {
  let borrowEvent = changetype<Borrow>(newMockEvent())

  borrowEvent.parameters = new Array()

  borrowEvent.parameters.push(
    new ethereum.EventParam("userAddrs", ethereum.Value.fromAddress(userAddrs))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  borrowEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return borrowEvent
}

export function createDepositEvent(
  userAddrs: Address,
  asset: Address,
  amount: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("userAddrs", ethereum.Value.fromAddress(userAddrs))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createPaybackEvent(
  userAddrs: Address,
  asset: Address,
  amount: BigInt
): Payback {
  let paybackEvent = changetype<Payback>(newMockEvent())

  paybackEvent.parameters = new Array()

  paybackEvent.parameters.push(
    new ethereum.EventParam("userAddrs", ethereum.Value.fromAddress(userAddrs))
  )
  paybackEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  paybackEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return paybackEvent
}

export function createSetActiveProviderEvent(
  providerAddr: Address
): SetActiveProvider {
  let setActiveProviderEvent = changetype<SetActiveProvider>(newMockEvent())

  setActiveProviderEvent.parameters = new Array()

  setActiveProviderEvent.parameters.push(
    new ethereum.EventParam(
      "providerAddr",
      ethereum.Value.fromAddress(providerAddr)
    )
  )

  return setActiveProviderEvent
}

export function createSwitchEvent(
  vault: Address,
  fromProviderAddrs: Address,
  toProviderAddr: Address,
  Debtamount: BigInt,
  Collattamount: BigInt
): Switch {
  let switchEvent = changetype<Switch>(newMockEvent())

  switchEvent.parameters = new Array()

  switchEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )
  switchEvent.parameters.push(
    new ethereum.EventParam(
      "fromProviderAddrs",
      ethereum.Value.fromAddress(fromProviderAddrs)
    )
  )
  switchEvent.parameters.push(
    new ethereum.EventParam(
      "toProviderAddr",
      ethereum.Value.fromAddress(toProviderAddr)
    )
  )
  switchEvent.parameters.push(
    new ethereum.EventParam(
      "Debtamount",
      ethereum.Value.fromUnsignedBigInt(Debtamount)
    )
  )
  switchEvent.parameters.push(
    new ethereum.EventParam(
      "Collattamount",
      ethereum.Value.fromUnsignedBigInt(Collattamount)
    )
  )

  return switchEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createWithdrawEvent(
  userAddrs: Address,
  asset: Address,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("userAddrs", ethereum.Value.fromAddress(userAddrs))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
