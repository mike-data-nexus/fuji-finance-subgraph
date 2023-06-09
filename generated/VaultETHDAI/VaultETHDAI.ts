// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Borrow extends ethereum.Event {
  get params(): Borrow__Params {
    return new Borrow__Params(this);
  }
}

export class Borrow__Params {
  _event: Borrow;

  constructor(event: Borrow) {
    this._event = event;
  }

  get userAddrs(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get asset(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get userAddrs(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get asset(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Payback extends ethereum.Event {
  get params(): Payback__Params {
    return new Payback__Params(this);
  }
}

export class Payback__Params {
  _event: Payback;

  constructor(event: Payback) {
    this._event = event;
  }

  get userAddrs(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get asset(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SetActiveProvider extends ethereum.Event {
  get params(): SetActiveProvider__Params {
    return new SetActiveProvider__Params(this);
  }
}

export class SetActiveProvider__Params {
  _event: SetActiveProvider;

  constructor(event: SetActiveProvider) {
    this._event = event;
  }

  get providerAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Switch extends ethereum.Event {
  get params(): Switch__Params {
    return new Switch__Params(this);
  }
}

export class Switch__Params {
  _event: Switch;

  constructor(event: Switch) {
    this._event = event;
  }

  get vault(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fromProviderAddrs(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get toProviderAddr(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get Debtamount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get Collattamount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get userAddrs(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get asset(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class VaultETHDAI__collatFResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getA(): BigInt {
    return this.value0;
  }

  getB(): BigInt {
    return this.value1;
  }
}

export class VaultETHDAI__safetyFResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getA(): BigInt {
    return this.value0;
  }

  getB(): BigInt {
    return this.value1;
  }
}

export class VaultETHDAI__vAssetsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getCollateralAsset(): Address {
    return this.value0;
  }

  getBorrowAsset(): Address {
    return this.value1;
  }

  getCollateralID(): BigInt {
    return this.value2;
  }

  getBorrowID(): BigInt {
    return this.value3;
  }
}

export class VaultETHDAI extends ethereum.SmartContract {
  static bind(address: Address): VaultETHDAI {
    return new VaultETHDAI("VaultETHDAI", address);
  }

  activeProvider(): Address {
    let result = super.call("activeProvider", "activeProvider():(address)", []);

    return result[0].toAddress();
  }

  try_activeProvider(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "activeProvider",
      "activeProvider():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allborrowBalance(): BigInt {
    let result = super.call(
      "allborrowBalance",
      "allborrowBalance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_allborrowBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allborrowBalance",
      "allborrowBalance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  alldepositBalance(): BigInt {
    let result = super.call(
      "alldepositBalance",
      "alldepositBalance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_alldepositBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "alldepositBalance",
      "alldepositBalance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  borrowBalance(_provider: Address): BigInt {
    let result = super.call(
      "borrowBalance",
      "borrowBalance(address):(uint256)",
      [ethereum.Value.fromAddress(_provider)]
    );

    return result[0].toBigInt();
  }

  try_borrowBalance(_provider: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "borrowBalance",
      "borrowBalance(address):(uint256)",
      [ethereum.Value.fromAddress(_provider)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  collatF(): VaultETHDAI__collatFResult {
    let result = super.call("collatF", "collatF():(uint64,uint64)", []);

    return new VaultETHDAI__collatFResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_collatF(): ethereum.CallResult<VaultETHDAI__collatFResult> {
    let result = super.tryCall("collatF", "collatF():(uint64,uint64)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VaultETHDAI__collatFResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  depositBalance(_provider: Address): BigInt {
    let result = super.call(
      "depositBalance",
      "depositBalance(address):(uint256)",
      [ethereum.Value.fromAddress(_provider)]
    );

    return result[0].toBigInt();
  }

  try_depositBalance(_provider: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "depositBalance",
      "depositBalance(address):(uint256)",
      [ethereum.Value.fromAddress(_provider)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fujiERC1155(): Address {
    let result = super.call("fujiERC1155", "fujiERC1155():(address)", []);

    return result[0].toAddress();
  }

  try_fujiERC1155(): ethereum.CallResult<Address> {
    let result = super.tryCall("fujiERC1155", "fujiERC1155():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLiquidationBonusFor(_amount: BigInt, _flash: boolean): BigInt {
    let result = super.call(
      "getLiquidationBonusFor",
      "getLiquidationBonusFor(uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBoolean(_flash)
      ]
    );

    return result[0].toBigInt();
  }

  try_getLiquidationBonusFor(
    _amount: BigInt,
    _flash: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLiquidationBonusFor",
      "getLiquidationBonusFor(uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBoolean(_flash)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNeededCollateralFor(_amount: BigInt, _withFactors: boolean): BigInt {
    let result = super.call(
      "getNeededCollateralFor",
      "getNeededCollateralFor(uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBoolean(_withFactors)
      ]
    );

    return result[0].toBigInt();
  }

  try_getNeededCollateralFor(
    _amount: BigInt,
    _withFactors: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNeededCollateralFor",
      "getNeededCollateralFor(uint256,bool):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromBoolean(_withFactors)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getProviders(): Array<Address> {
    let result = super.call("getProviders", "getProviders():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getProviders(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getProviders",
      "getProviders():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  oracle(): Address {
    let result = super.call("oracle", "oracle():(address)", []);

    return result[0].toAddress();
  }

  try_oracle(): ethereum.CallResult<Address> {
    let result = super.tryCall("oracle", "oracle():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  providers(param0: BigInt): Address {
    let result = super.call("providers", "providers(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_providers(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("providers", "providers(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  safetyF(): VaultETHDAI__safetyFResult {
    let result = super.call("safetyF", "safetyF():(uint64,uint64)", []);

    return new VaultETHDAI__safetyFResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_safetyF(): ethereum.CallResult<VaultETHDAI__safetyFResult> {
    let result = super.tryCall("safetyF", "safetyF():(uint64,uint64)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VaultETHDAI__safetyFResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  vAssets(): VaultETHDAI__vAssetsResult {
    let result = super.call(
      "vAssets",
      "vAssets():(address,address,uint64,uint64)",
      []
    );

    return new VaultETHDAI__vAssetsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_vAssets(): ethereum.CallResult<VaultETHDAI__vAssetsResult> {
    let result = super.tryCall(
      "vAssets",
      "vAssets():(address,address,uint64,uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VaultETHDAI__vAssetsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BorrowCall extends ethereum.Call {
  get inputs(): BorrowCall__Inputs {
    return new BorrowCall__Inputs(this);
  }

  get outputs(): BorrowCall__Outputs {
    return new BorrowCall__Outputs(this);
  }
}

export class BorrowCall__Inputs {
  _call: BorrowCall;

  constructor(call: BorrowCall) {
    this._call = call;
  }

  get _borrowAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BorrowCall__Outputs {
  _call: BorrowCall;

  constructor(call: BorrowCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _collateralAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositAndBorrowCall extends ethereum.Call {
  get inputs(): DepositAndBorrowCall__Inputs {
    return new DepositAndBorrowCall__Inputs(this);
  }

  get outputs(): DepositAndBorrowCall__Outputs {
    return new DepositAndBorrowCall__Outputs(this);
  }
}

export class DepositAndBorrowCall__Inputs {
  _call: DepositAndBorrowCall;

  constructor(call: DepositAndBorrowCall) {
    this._call = call;
  }

  get _collateralAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _borrowAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositAndBorrowCall__Outputs {
  _call: DepositAndBorrowCall;

  constructor(call: DepositAndBorrowCall) {
    this._call = call;
  }
}

export class ExecuteSwitchCall extends ethereum.Call {
  get inputs(): ExecuteSwitchCall__Inputs {
    return new ExecuteSwitchCall__Inputs(this);
  }

  get outputs(): ExecuteSwitchCall__Outputs {
    return new ExecuteSwitchCall__Outputs(this);
  }
}

export class ExecuteSwitchCall__Inputs {
  _call: ExecuteSwitchCall;

  constructor(call: ExecuteSwitchCall) {
    this._call = call;
  }

  get _newProvider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _flashLoanAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _fee(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ExecuteSwitchCall__Outputs {
  _call: ExecuteSwitchCall;

  constructor(call: ExecuteSwitchCall) {
    this._call = call;
  }
}

export class HarvestRewardsCall extends ethereum.Call {
  get inputs(): HarvestRewardsCall__Inputs {
    return new HarvestRewardsCall__Inputs(this);
  }

  get outputs(): HarvestRewardsCall__Outputs {
    return new HarvestRewardsCall__Outputs(this);
  }
}

export class HarvestRewardsCall__Inputs {
  _call: HarvestRewardsCall;

  constructor(call: HarvestRewardsCall) {
    this._call = call;
  }

  get _farmProtocolNum(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class HarvestRewardsCall__Outputs {
  _call: HarvestRewardsCall;

  constructor(call: HarvestRewardsCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PaybackCall extends ethereum.Call {
  get inputs(): PaybackCall__Inputs {
    return new PaybackCall__Inputs(this);
  }

  get outputs(): PaybackCall__Outputs {
    return new PaybackCall__Outputs(this);
  }
}

export class PaybackCall__Inputs {
  _call: PaybackCall;

  constructor(call: PaybackCall) {
    this._call = call;
  }

  get _repayAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PaybackCall__Outputs {
  _call: PaybackCall;

  constructor(call: PaybackCall) {
    this._call = call;
  }
}

export class PaybackAndWithdrawCall extends ethereum.Call {
  get inputs(): PaybackAndWithdrawCall__Inputs {
    return new PaybackAndWithdrawCall__Inputs(this);
  }

  get outputs(): PaybackAndWithdrawCall__Outputs {
    return new PaybackAndWithdrawCall__Outputs(this);
  }
}

export class PaybackAndWithdrawCall__Inputs {
  _call: PaybackAndWithdrawCall;

  constructor(call: PaybackAndWithdrawCall) {
    this._call = call;
  }

  get _paybackAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _collateralAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PaybackAndWithdrawCall__Outputs {
  _call: PaybackAndWithdrawCall;

  constructor(call: PaybackAndWithdrawCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetActiveProviderCall extends ethereum.Call {
  get inputs(): SetActiveProviderCall__Inputs {
    return new SetActiveProviderCall__Inputs(this);
  }

  get outputs(): SetActiveProviderCall__Outputs {
    return new SetActiveProviderCall__Outputs(this);
  }
}

export class SetActiveProviderCall__Inputs {
  _call: SetActiveProviderCall;

  constructor(call: SetActiveProviderCall) {
    this._call = call;
  }

  get _provider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetActiveProviderCall__Outputs {
  _call: SetActiveProviderCall;

  constructor(call: SetActiveProviderCall) {
    this._call = call;
  }
}

export class SetFactorCall extends ethereum.Call {
  get inputs(): SetFactorCall__Inputs {
    return new SetFactorCall__Inputs(this);
  }

  get outputs(): SetFactorCall__Outputs {
    return new SetFactorCall__Outputs(this);
  }
}

export class SetFactorCall__Inputs {
  _call: SetFactorCall;

  constructor(call: SetFactorCall) {
    this._call = call;
  }

  get _newFactorA(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newFactorB(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _isSafety(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetFactorCall__Outputs {
  _call: SetFactorCall;

  constructor(call: SetFactorCall) {
    this._call = call;
  }
}

export class SetFujiAdminCall extends ethereum.Call {
  get inputs(): SetFujiAdminCall__Inputs {
    return new SetFujiAdminCall__Inputs(this);
  }

  get outputs(): SetFujiAdminCall__Outputs {
    return new SetFujiAdminCall__Outputs(this);
  }
}

export class SetFujiAdminCall__Inputs {
  _call: SetFujiAdminCall;

  constructor(call: SetFujiAdminCall) {
    this._call = call;
  }

  get _newFujiAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFujiAdminCall__Outputs {
  _call: SetFujiAdminCall;

  constructor(call: SetFujiAdminCall) {
    this._call = call;
  }
}

export class SetFujiERC1155Call extends ethereum.Call {
  get inputs(): SetFujiERC1155Call__Inputs {
    return new SetFujiERC1155Call__Inputs(this);
  }

  get outputs(): SetFujiERC1155Call__Outputs {
    return new SetFujiERC1155Call__Outputs(this);
  }
}

export class SetFujiERC1155Call__Inputs {
  _call: SetFujiERC1155Call;

  constructor(call: SetFujiERC1155Call) {
    this._call = call;
  }

  get _fujiERC1155(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetFujiERC1155Call__Outputs {
  _call: SetFujiERC1155Call;

  constructor(call: SetFujiERC1155Call) {
    this._call = call;
  }
}

export class SetOracleCall extends ethereum.Call {
  get inputs(): SetOracleCall__Inputs {
    return new SetOracleCall__Inputs(this);
  }

  get outputs(): SetOracleCall__Outputs {
    return new SetOracleCall__Outputs(this);
  }
}

export class SetOracleCall__Inputs {
  _call: SetOracleCall;

  constructor(call: SetOracleCall) {
    this._call = call;
  }

  get _oracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOracleCall__Outputs {
  _call: SetOracleCall;

  constructor(call: SetOracleCall) {
    this._call = call;
  }
}

export class SetProvidersCall extends ethereum.Call {
  get inputs(): SetProvidersCall__Inputs {
    return new SetProvidersCall__Inputs(this);
  }

  get outputs(): SetProvidersCall__Outputs {
    return new SetProvidersCall__Outputs(this);
  }
}

export class SetProvidersCall__Inputs {
  _call: SetProvidersCall;

  constructor(call: SetProvidersCall) {
    this._call = call;
  }

  get _providers(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class SetProvidersCall__Outputs {
  _call: SetProvidersCall;

  constructor(call: SetProvidersCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UpdateF1155BalancesCall extends ethereum.Call {
  get inputs(): UpdateF1155BalancesCall__Inputs {
    return new UpdateF1155BalancesCall__Inputs(this);
  }

  get outputs(): UpdateF1155BalancesCall__Outputs {
    return new UpdateF1155BalancesCall__Outputs(this);
  }
}

export class UpdateF1155BalancesCall__Inputs {
  _call: UpdateF1155BalancesCall;

  constructor(call: UpdateF1155BalancesCall) {
    this._call = call;
  }
}

export class UpdateF1155BalancesCall__Outputs {
  _call: UpdateF1155BalancesCall;

  constructor(call: UpdateF1155BalancesCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _withdrawAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
