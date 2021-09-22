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

export class MaciDeployed extends ethereum.Event {
  get params(): MaciDeployed__Params {
    return new MaciDeployed__Params(this);
  }
}

export class MaciDeployed__Params {
  _event: MaciDeployed;

  constructor(event: MaciDeployed) {
    this._event = event;
  }

  get _maci(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MaciParametersChanged extends ethereum.Event {
  get params(): MaciParametersChanged__Params {
    return new MaciParametersChanged__Params(this);
  }
}

export class MaciParametersChanged__Params {
  _event: MaciParametersChanged;

  constructor(event: MaciParametersChanged) {
    this._event = event;
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

export class MACIFactory__batchSizesResult {
  value0: i32;
  value1: i32;

  constructor(value0: i32, value1: i32) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    return map;
  }
}

export class MACIFactory__deployMaciInput_coordinatorPubKeyStruct extends ethereum.Tuple {
  get x(): BigInt {
    return this[0].toBigInt();
  }

  get y(): BigInt {
    return this[1].toBigInt();
  }
}

export class MACIFactory__maxValuesResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class MACIFactory__treeDepthsResult {
  value0: i32;
  value1: i32;
  value2: i32;

  constructor(value0: i32, value1: i32, value2: i32) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2))
    );
    return map;
  }
}

export class MACIFactory extends ethereum.SmartContract {
  static bind(address: Address): MACIFactory {
    return new MACIFactory("MACIFactory", address);
  }

  batchSizes(): MACIFactory__batchSizesResult {
    let result = super.call("batchSizes", "batchSizes():(uint8,uint8)", []);

    return new MACIFactory__batchSizesResult(
      result[0].toI32(),
      result[1].toI32()
    );
  }

  try_batchSizes(): ethereum.CallResult<MACIFactory__batchSizesResult> {
    let result = super.tryCall("batchSizes", "batchSizes():(uint8,uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MACIFactory__batchSizesResult(value[0].toI32(), value[1].toI32())
    );
  }

  batchUstVerifier(): Address {
    let result = super.call(
      "batchUstVerifier",
      "batchUstVerifier():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_batchUstVerifier(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "batchUstVerifier",
      "batchUstVerifier():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deployMaci(
    _signUpGatekeeper: Address,
    _initialVoiceCreditProxy: Address,
    _coordinator: Address,
    _coordinatorPubKey: MACIFactory__deployMaciInput_coordinatorPubKeyStruct
  ): Address {
    let result = super.call(
      "deployMaci",
      "deployMaci(address,address,address,(uint256,uint256)):(address)",
      [
        ethereum.Value.fromAddress(_signUpGatekeeper),
        ethereum.Value.fromAddress(_initialVoiceCreditProxy),
        ethereum.Value.fromAddress(_coordinator),
        ethereum.Value.fromTuple(_coordinatorPubKey)
      ]
    );

    return result[0].toAddress();
  }

  try_deployMaci(
    _signUpGatekeeper: Address,
    _initialVoiceCreditProxy: Address,
    _coordinator: Address,
    _coordinatorPubKey: MACIFactory__deployMaciInput_coordinatorPubKeyStruct
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "deployMaci",
      "deployMaci(address,address,address,(uint256,uint256)):(address)",
      [
        ethereum.Value.fromAddress(_signUpGatekeeper),
        ethereum.Value.fromAddress(_initialVoiceCreditProxy),
        ethereum.Value.fromAddress(_coordinator),
        ethereum.Value.fromTuple(_coordinatorPubKey)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  maxValues(): MACIFactory__maxValuesResult {
    let result = super.call(
      "maxValues",
      "maxValues():(uint256,uint256,uint256)",
      []
    );

    return new MACIFactory__maxValuesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_maxValues(): ethereum.CallResult<MACIFactory__maxValuesResult> {
    let result = super.tryCall(
      "maxValues",
      "maxValues():(uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MACIFactory__maxValuesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
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

  qvtVerifier(): Address {
    let result = super.call("qvtVerifier", "qvtVerifier():(address)", []);

    return result[0].toAddress();
  }

  try_qvtVerifier(): ethereum.CallResult<Address> {
    let result = super.tryCall("qvtVerifier", "qvtVerifier():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  signUpDuration(): BigInt {
    let result = super.call("signUpDuration", "signUpDuration():(uint256)", []);

    return result[0].toBigInt();
  }

  try_signUpDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "signUpDuration",
      "signUpDuration():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  treeDepths(): MACIFactory__treeDepthsResult {
    let result = super.call(
      "treeDepths",
      "treeDepths():(uint8,uint8,uint8)",
      []
    );

    return new MACIFactory__treeDepthsResult(
      result[0].toI32(),
      result[1].toI32(),
      result[2].toI32()
    );
  }

  try_treeDepths(): ethereum.CallResult<MACIFactory__treeDepthsResult> {
    let result = super.tryCall(
      "treeDepths",
      "treeDepths():(uint8,uint8,uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MACIFactory__treeDepthsResult(
        value[0].toI32(),
        value[1].toI32(),
        value[2].toI32()
      )
    );
  }

  votingDuration(): BigInt {
    let result = super.call("votingDuration", "votingDuration():(uint256)", []);

    return result[0].toBigInt();
  }

  try_votingDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "votingDuration",
      "votingDuration():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  get _stateTreeDepth(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _messageTreeDepth(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _voteOptionTreeDepth(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get _tallyBatchSize(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _messageBatchSize(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get _batchUstVerifier(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _qvtVerifier(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _signUpDuration(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _votingDuration(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DeployMaciCall extends ethereum.Call {
  get inputs(): DeployMaciCall__Inputs {
    return new DeployMaciCall__Inputs(this);
  }

  get outputs(): DeployMaciCall__Outputs {
    return new DeployMaciCall__Outputs(this);
  }
}

export class DeployMaciCall__Inputs {
  _call: DeployMaciCall;

  constructor(call: DeployMaciCall) {
    this._call = call;
  }

  get _signUpGatekeeper(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _initialVoiceCreditProxy(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _coordinator(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _coordinatorPubKey(): DeployMaciCall_coordinatorPubKeyStruct {
    return this._call.inputValues[3].value.toTuple() as DeployMaciCall_coordinatorPubKeyStruct;
  }
}

export class DeployMaciCall__Outputs {
  _call: DeployMaciCall;

  constructor(call: DeployMaciCall) {
    this._call = call;
  }

  get _maci(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DeployMaciCall_coordinatorPubKeyStruct extends ethereum.Tuple {
  get x(): BigInt {
    return this[0].toBigInt();
  }

  get y(): BigInt {
    return this[1].toBigInt();
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

export class SetMaciParametersCall extends ethereum.Call {
  get inputs(): SetMaciParametersCall__Inputs {
    return new SetMaciParametersCall__Inputs(this);
  }

  get outputs(): SetMaciParametersCall__Outputs {
    return new SetMaciParametersCall__Outputs(this);
  }
}

export class SetMaciParametersCall__Inputs {
  _call: SetMaciParametersCall;

  constructor(call: SetMaciParametersCall) {
    this._call = call;
  }

  get _stateTreeDepth(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _messageTreeDepth(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _voteOptionTreeDepth(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get _tallyBatchSize(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _messageBatchSize(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get _batchUstVerifier(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _qvtVerifier(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _signUpDuration(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _votingDuration(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }
}

export class SetMaciParametersCall__Outputs {
  _call: SetMaciParametersCall;

  constructor(call: SetMaciParametersCall) {
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
