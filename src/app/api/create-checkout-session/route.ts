import { error } from "console";
import { NextResponse } from "next/server";

import  Stripe from 'stripe'

const strip =new Stripe(process.env.STRIPE_SECRET_KEY!,{
    apiVersion:"2024-11-20.acacia"
})

export async function POST(req:Request) {
    try {
        const {priceId,userId}=await req.json()
        if(!priceId || !userId){
            return NextResponse.json(
                {error:'missing price or user id'},
                {status:400}
            )
        }

        const session = await strip.checkout.sessions.create({
            mode:'subscription',
            payment_method_types:['card','amazon_pay'],
            line_items:[
                {
                    price:priceId,
                    quantity:1,
                }
            ],
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/generate?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
            client_reference_id: userId,
        });
        return NextResponse.json({sessionId:session.id})
    } catch (error:any) {
        console.error("Error creating checkout session:", error);
        return NextResponse.json(
          { error: "Error creating checkout session", details: error.message },
          { status: 500 }
        );
    }
    
}