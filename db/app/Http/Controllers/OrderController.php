<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::all();
        return $orders;

        // http://127.0.0.1:8000/api/orders GET
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(StoreOrderRequest $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOrderRequest $request)
    {
        $order =  Order::create([
            'details' => $request->details,
            'total_price' => $request->total_price,
            'user_id' => $request->user_id
        ]);
        return $order;
        // http://127.0.0.1:8000/api/orders POST
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        $order = Order::find($order->id);
        return $order;
    }

    public function userOrders($userID){
        $orders=Order::where('user_id',$userID)->get();
        return $orders;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function edit(Order $order)
    {
        //
    }

    public function update(UpdateOrderRequest $request,Order $order)
    {
        $order = Order::find($order->id);
        $order->details = $request->details;
        $order->total_price = $request->total_price;
        $order->status = $request->status;
        $order->user_id = $request->user_id;
        $order->save();

        return $order;

        // http://127.0.0.1:8000/api/orders/1 PUT
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        $order = Order::find($order->id);
        $order->delete();
        return $order;
    }

}
