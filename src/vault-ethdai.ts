import {
  Borrow as BorrowEvent,
  Deposit as DepositEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Payback as PaybackEvent,
  SetActiveProvider as SetActiveProviderEvent,
  Switch as SwitchEvent,
  Unpaused as UnpausedEvent,
  Withdraw as WithdrawEvent,
} from "../generated/VaultETHDAI/VaultETHDAI";
import {
  Borrow,
  Deposit,
  OwnershipTransferred,
  Paused,
  Payback,
  SetActiveProvider,
  Switch,
  Unpaused,
  Withdraw,
} from "../generated/schema";

//DEPOSIT EVENT //
export function handleDeposit(event: DepositEvent): void {
  let deposit = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  deposit.userAddrs = event.params.userAddrs;
  deposit.asset = event.params.asset;
  deposit.amount = event.params.amount;

  deposit.blockNumber = event.block.number;
  deposit.blockTimestamp = event.block.timestamp;
  deposit.transactionHash = event.transaction.hash;

  deposit.save();
}

// BORROW EVENT //
export function handleBorrow(event: BorrowEvent): void {
  let borrow = new Borrow(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  borrow.userAddrs = event.params.userAddrs;
  borrow.asset = event.params.asset;
  borrow.amount = event.params.amount;

  borrow.blockNumber = event.block.number;
  borrow.blockTimestamp = event.block.timestamp;
  borrow.transactionHash = event.transaction.hash;

  borrow.save();
}

// WITHDRAW EVENT //
export function handleWithdraw(event: WithdrawEvent): void {
  let withdraw = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  withdraw.userAddrs = event.params.userAddrs;
  withdraw.asset = event.params.asset;
  withdraw.amount = event.params.amount;

  withdraw.blockNumber = event.block.number;
  withdraw.blockTimestamp = event.block.timestamp;
  withdraw.transactionHash = event.transaction.hash;

  withdraw.save();
}

//PAYBACK OF THE ASSET //
export function handlePayback(event: PaybackEvent): void {
  let payback = new Payback(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  payback.userAddrs = event.params.userAddrs;
  payback.asset = event.params.asset;
  payback.amount = event.params.amount;

  payback.blockNumber = event.block.number;
  payback.blockTimestamp = event.block.timestamp;
  payback.transactionHash = event.transaction.hash;

  payback.save();
}

// OWNERSHIP TRANSFER OF ASSET //
export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let ownershipTransfered = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  ownershipTransfered.previousOwner = event.params.previousOwner;
  ownershipTransfered.newOwner = event.params.newOwner;

  ownershipTransfered.blockNumber = event.block.number;
  ownershipTransfered.blockTimestamp = event.block.timestamp;
  ownershipTransfered.transactionHash = event.transaction.hash;

  ownershipTransfered.save();
}

// PAUSE OF THE ASSET //
export function handlePaused(event: PausedEvent): void {
  let paused = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  paused.account = event.params.account;

  paused.blockNumber = event.block.number;
  paused.blockTimestamp = event.block.timestamp;
  paused.transactionHash = event.transaction.hash;

  paused.save();
}

export function handleUnpaused(event: UnpausedEvent): void {
  let unpaused = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  unpaused.account = event.params.account;

  unpaused.blockNumber = event.block.number;
  unpaused.blockTimestamp = event.block.timestamp;
  unpaused.transactionHash = event.transaction.hash;

  unpaused.save();
}

export function handleSetActiveProvider(event: SetActiveProviderEvent): void {
  let setActiveProvider = new SetActiveProvider(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  setActiveProvider.providerAddr = event.params.providerAddr;

  setActiveProvider.blockNumber = event.block.number;
  setActiveProvider.blockTimestamp = event.block.timestamp;
  setActiveProvider.transactionHash = event.transaction.hash;

  setActiveProvider.save();
}

export function handleSwitch(event: SwitchEvent): void {
  let _switch = new Switch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  _switch.vault = event.params.vault;
  _switch.fromProviderAddrs = event.params.fromProviderAddrs;
  _switch.toProviderAddr = event.params.toProviderAddr;
  _switch.Debtamount = event.params.Debtamount;
  _switch.Collattamount = event.params.Collattamount;

  _switch.blockNumber = event.block.number;
  _switch.blockTimestamp = event.block.timestamp;
  _switch.transactionHash = event.transaction.hash;

  _switch.save();
}
