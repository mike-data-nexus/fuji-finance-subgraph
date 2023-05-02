import {
  Borrow as BorrowEvent,
  Deposit as DepositEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Payback as PaybackEvent,
  SetActiveProvider as SetActiveProviderEvent,
  Switch as SwitchEvent,
  Unpaused as UnpausedEvent,
  Withdraw as WithdrawEvent
} from "../generated/VaultETHDAI/VaultETHDAI"
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
} from "../generated/schema"

export function handleBorrow(event: BorrowEvent): void {
  let entity = new Borrow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddrs = event.params.userAddrs
  entity.asset = event.params.asset
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddrs = event.params.userAddrs
  entity.asset = event.params.asset
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePayback(event: PaybackEvent): void {
  let entity = new Payback(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddrs = event.params.userAddrs
  entity.asset = event.params.asset
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetActiveProvider(event: SetActiveProviderEvent): void {
  let entity = new SetActiveProvider(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.providerAddr = event.params.providerAddr

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwitch(event: SwitchEvent): void {
  let entity = new Switch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.vault = event.params.vault
  entity.fromProviderAddrs = event.params.fromProviderAddrs
  entity.toProviderAddr = event.params.toProviderAddr
  entity.Debtamount = event.params.Debtamount
  entity.Collattamount = event.params.Collattamount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddrs = event.params.userAddrs
  entity.asset = event.params.asset
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
