import React from 'react';
import {
    ActivityIndicator,
    GestureResponderEvent,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'warning' | "success" | "info" | "dark";
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    fullWidth = false,
    style,
    textStyle,
}) => {
    const isDisabled = disabled || loading;

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={isDisabled}
            activeOpacity={0.7}
            style={[
                styles.base,
                styles[variant],
                styles[`${size}Size`],
                fullWidth && styles.fullWidth,
                isDisabled && styles.disabled,
                style,
            ]}
        >
            {loading ? (
                <ActivityIndicator
                    color={variant === 'outline' ? '#007AFF' : '#FFFFFF'}
                    size="small"
                />
            ) : (
                <Text
                    style={[
                        styles.text,
                        styles[`${variant}Text`],
                        styles[`${size}Text`],
                        textStyle,
                    ]}
                >
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    fullWidth: {
        width: '100%',
    },
    disabled: {
        opacity: 0.5,
    },

    // Variants
    primary: {
        backgroundColor: '#007AFF',
    },
    secondary: {
        backgroundColor: '#5856D6',
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: '#007AFF',
    },
    danger: {
        backgroundColor: '#FF3B30',
        // borderWidth: 1.5,
        // borderColor: '#007AFF',
    },
    warning: {
        backgroundColor: '#FF9500',
    },
    success: {
        backgroundColor: '#34C759',
    },
    info: {
        backgroundColor: '#007AFF',
    },
    dark: {
        backgroundColor: '#8E8E93',
    },

    // Sizes
    smallSize: {
        paddingVertical: 8,
        paddingHorizontal: 14,
    },
    mediumSize: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    largeSize: {
        paddingVertical: 16,
        paddingHorizontal: 28,
    },

    // Text
    text: {
        fontWeight: '600',
    },
    primaryText: {
        color: '#FFFFFF',
    },
    secondaryText: {
        color: '#FFFFFF',
    },
    outlineText: {
        color: '#007AFF',
    },
    dangerText: {
        color: '#FFFFFF',
    },
    smallText: {
        fontSize: 13,
    },
    mediumText: {
        fontSize: 16,
    },
    largeText: {
        fontSize: 18,
    },
});

export default Button;