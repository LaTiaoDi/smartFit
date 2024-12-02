<template>
	<view>
	<uni-section title="食物能量" type="line">
				<uni-card padding="0" spacing="0" >
					<template v-slot:cover>
						<view class="custom-cover">
							<image class="cover-image" mode="aspectFill" :src="src">
							</image></view>
					</template>
					<uni-list>
						<uni-list-item title="食物名称: apple" ></uni-list-item>
						<uni-list-item title="卡路里 : 1000卡" >
							<template v-slot:body>
										<text class="slot-box slot-text">卡路里 : </text>
										<text class="slot-box slot-text" style="color: brown">1000卡 </text>
							</template>
							<text>不建议食用，脂肪过高</text>
						</uni-list-item>
						<uni-list-item title="健康度 : 80%" >
							<template v-slot:body>
										<text class="slot-box slot-text">健康度 : </text>
										<text class="slot-box slot-text" style="color: darkgreen">80% </text>
							</template>
							<text>不建议食用，脂肪过高</text>
						</uni-list-item>
						<uni-list-item title="食用建议 : " >
							<template v-slot:body>
										<text class="slot-box slot-text">食用建议 : </text>
										<text class="slot-box slot-text" style="color: red">脂肪过高，不建议食用 </text>
							</template>
							<text>不建议食用，脂肪过高</text>
						</uni-list-item>
						
					</uni-list>
				</uni-card>
			</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:undefined // 照片参数
			};
		},
		onLoad(e) {
			this.src = undefined
			this.src = e.src;
		},
		 onBackPress(options) {  
            if (options.from === 'navigateBack') {  
                return false;  
            }  
            this.back();  
            return true;  
        }, 
		methods:{
			  back() {  
                uni.navigateBack({  
                    delta: 2  
                });  
            }  
		},
	}
</script>

<style lang="scss">
	.container {
		overflow: hidden;
	}

	.custom-cover {
		flex: 1;
		flex-direction: row;
		position: relative;
	}

	.cover-content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40px;
		background-color: rgba($color: #000000, $alpha: 0.4);
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 15px;
		font-size: 14px;
		color: #fff;
	}

	.card-actions {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: 45px;
		border-top: 1px #eee solid;
	}
	.card-actions-item {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.card-actions-item-text {
		font-size: 12px;
		color: #666;
		margin-left: 5px;
	}
	.cover-image {
		flex: 1;
		height: 200px;
		width: 100%;
	}
	.no-border {
		border-width: 0;
	}
</style>
